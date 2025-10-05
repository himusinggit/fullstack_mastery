import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import conf from '../conf/conf'
import { Controller } from 'react-hook-form'
const RTE = ({ name = 'content', control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Editor
          apiKey={conf.tinymceApiKey}
          value={value || ''}
          onEditorChange={onChange}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      )}
    />
  );
};

export default RTE
