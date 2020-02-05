import React from 'react';
import { render } from '@testing-library/react';
import PageSection from './index';

describe('PageSection', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <PageSection title="A title">
        <p>Lorem Ipsum</p>
      </PageSection>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
