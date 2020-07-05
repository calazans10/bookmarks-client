import { RootState } from 'app/ui/types';

export const isAlertVisible = ({ ui }: RootState) => ui.alert.isVisible;

export const getAlertMessage = ({ ui }: RootState) => ui.alert.message;

export const isLoadingVisible = ({ ui }: RootState) => ui.loading.isVisible;

export const isConfirmVisible = ({ ui }: RootState) => ui.confirm.isVisible;
