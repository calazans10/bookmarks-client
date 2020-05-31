import { Server, Model, Response, hasMany, belongsTo } from 'miragejs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import env from 'env-var';
import { bookmarks, users } from '../fixtures';

const API_URL: string = env.get('REACT_APP_API_URL').required().asString();

const getToken = requestHeaders => requestHeaders.Authorization.split(' ')[1];

const getCollectionResponse = data => ({
  meta: {
    count: data.length,
    offset: 1,
    limit: 9999,
    total: data.length,
  },
  data,
});

export const makeServer = () => {
  return new Server({
    models: {
      user: Model.extend({
        bookmarks: hasMany(),
      }),
      bookmark: Model.extend({
        user: belongsTo(),
      }),
    },

    fixtures: {
      bookmarks,
      users,
    },

    routes() {
      this.urlPrefix = API_URL
      this.namespace = "/api";

      this.post("/v1/session", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const { email } = attrs.auth;

        const user = schema.db.users.findBy({ email });
        if (user) {
          return { jwt: jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' }) };
        }

        return new Response(401);
      });

      this.post('/v1/registration', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const { name, email } = attrs;
        const date = new Date().toISOString();

        return schema.db.users.firstOrCreate({ email }, {
          name,
          id: uuidv4(),
          is_admin: false,
          created_at: date,
          updated_at: date,
          bookmarks_count: 0,
        });
      });

      this.get('/v1/me', (schema, request) => {
        const token = getToken(request.requestHeaders);
        try {
          const decoded = jwt.verify(token, 'secret');
          return schema.db.users.find(decoded.userId);
        } catch (error) {
          return new Response(401);
        }
      });

      this.get('/v1/admin/bookmarks', schema => {
        const data = schema.db.bookmarks;
        return getCollectionResponse(data);
      });

      this.get('/v1/admin/users', schema => {
        const data = schema.db.users.where({ is_admin: false });
        return getCollectionResponse(data);
      });

      this.get('/v1/bookmarks', (schema, request) => {
        const token = getToken(request.requestHeaders);
        try {
          const decoded = jwt.verify(token, 'secret');
          const data = schema.db.bookmarks.where({ user_id: decoded.userId });
          return getCollectionResponse(data);
        } catch (error) {
          return new Response(401);
        }
      });

      this.post('/v1/bookmarks', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const token = getToken(request.requestHeaders);
        try {
          const decoded = jwt.verify(token, 'secret');
          const date = new Date().toISOString();

          schema.db.bookmarks.insert({
            ...attrs,
            id: uuidv4(),
            user_id: decoded.userId,
            created_at: date,
            updated_at: date,
          });

          return new Response(201);
        } catch (error) {
          return new Response(401);
        }
      });

      this.put('/v1/bookmarks/:id', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const { id } = request.params;
        schema.db.bookmarks.update(id, { ...attrs, updated_at: new Date().toISOString() });
        return new Response(204);
      });

      this.delete('/v1/bookmarks/:id', (schema, request) => {
        const { id } = request.params;
        schema.db.bookmarks.remove(id);
        return new Response(204);
      });
    },

    seeds(server) {
      server.loadFixtures();
    },
  });
}
