import { UISelector } from '../types';

export const isAlertVisible = ({ ui }: UISelector) => ui.alert.isVisible;

export const getAlertMessage = ({ ui }: UISelector) => ui.alert.message;

export const isLoadingVisible = ({ ui }: UISelector) => ui.loading.isVisible;

export const isConfirmVisible = ({ ui }: UISelector) => ui.confirm.isVisible;
