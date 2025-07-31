import React, { FC, useEffect, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

import { Box, useTheme } from '@mui/material';
import clsx from 'clsx';

import { StyledUploadFilesBox } from './UploadFiles.styled';
import { Text } from '../Text';
import { UploadFilesItem, UploadFilesItemProps } from '../UploadFilesItem';
import { DEFAULT_ACCEPT_FILE_MIME, DEFAULT_FORMATS_FILE, DEFAULT_MAX_FILE_SIZE } from '../../constants';
import { Icon } from '../../icons';

export interface UploadFilesTextInfoProps {
  title?: string;
  preFormat?: string;
  format?: string;
  preSize?: string;
  size?: string;
  selectFile?: string;
  dragToWindow?: string;
  downloadTemplate?: string;
}

export interface UploadFilesProps extends Pick<UploadFilesItemProps, 'copyText'> {
  options?: DropzoneOptions;
  textInfo: UploadFilesTextInfoProps;
  value?: File[];
  onChange?: (values: File[]) => void;
  onDelete?: (index: number) => void;
  disabled?: boolean;
  isError?: boolean;
}

export const UploadFiles: FC<UploadFilesProps> = (props) => {
  const { isError, disabled, onDelete, onChange, textInfo, options, value, copyText } = props;

  const [files, setFiles] = useState<File[]>([]);

  const theme = useTheme();

  const { acceptedFiles, getInputProps, getRootProps, isDragReject } = useDropzone({
    accept: options?.accept ?? DEFAULT_ACCEPT_FILE_MIME,
    maxSize: options?.maxSize ?? DEFAULT_MAX_FILE_SIZE,
    disabled: disabled,
    ...options,
  });

  const onRemoveFile = (index: number) => {
    if (onDelete) {
      onDelete(index);
    }
  };

  useEffect(() => {
    if (value) {
      setFiles(value);
    }
  }, [value]);

  useEffect(() => {
    if (acceptedFiles && acceptedFiles.length > 0 && onChange) {
      const newFiles = [...files, ...acceptedFiles];
      setFiles(newFiles);
      onChange(newFiles);
    }
  }, [acceptedFiles]);

  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <StyledUploadFilesBox
        {...getRootProps()}
        className={clsx({
          error: isDragReject || isError,
          disabled: options?.disabled || disabled,
        })}
      >
        <input {...getInputProps()} />
        <Text uiType={'text_14_400_primary_087'}>{textInfo?.title}</Text>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={1} gap={0.5}>
          <Text uiType={'text_14_400_primary_06'}>
            <Text component={'span'} uiType={'text_14_400_primary_06'} color={theme.palette.primary.main}>
              {textInfo?.selectFile}
            </Text>
            {textInfo?.dragToWindow}
          </Text>
          <Text uiType={'text_14_400_primary_06'}>
            {textInfo?.preFormat}: {textInfo?.format ?? DEFAULT_FORMATS_FILE.join(', ')} {textInfo?.preSize}{' '}
            {textInfo?.size ?? '10Mb'}
          </Text>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={0.5} mt={2.5}>
          <Icon uiType={'icon_main_file'} />
          <Text color={theme.palette.primary.main} uiType={'text_14_400_primary_06'}>
            {textInfo?.downloadTemplate}
          </Text>
        </Box>
      </StyledUploadFilesBox>

      {files.length > 0 && (
        <Box display={'flex'} flexDirection={'column'} gap={2}>
          {files.map((item, index) => (
            <UploadFilesItem copyText={copyText} key={index} fileName={item.name} onClick={() => onRemoveFile(index)} />
          ))}
        </Box>
      )}
    </Box>
  );
};
