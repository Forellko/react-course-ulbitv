import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholder={'Поиск...'}
        value={filter.query}
        onChange={(e) => {
          setFilter({ ...filter, query: e.target.value });
        }}
      />
      <MySelect
        value={filter.sort}
        defaultValue={'Сортировка по'}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
        onChange={(option) => {
          setFilter({ ...filter, sort: option });
        }}
      />
    </div>
  );
}
