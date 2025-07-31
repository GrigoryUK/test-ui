import { UploadFilesFileFormatType, UploadFilesMimeType } from '../types';

export const PAGE_SIZE = [10, 25, 50, 100];

export const DEFAULT_MAX_FILE_SIZE = 10 * 1024 * 1024;

export const DEFAULT_MAX_WIDTH_AUTOCOMPLETE = '100%';

export const DEFAULT_ACCEPT_FILE_MIME: Record<UploadFilesMimeType, []> = {
  'image/png': [],
  'image/jpg': [],
  'image/jpeg': [],
  'application/pdf': [],
};

export const DEFAULT_FORMATS_FILE: UploadFilesFileFormatType[] = ['PDF', 'JPG', 'PNG'];
