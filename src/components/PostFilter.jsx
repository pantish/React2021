import React, { useState, useMemo } from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from "./UI/input/MuInput";

const PostFilter = ({filter, setFilter}) => {
    return (
    <div>
      <MyInput 
      value={filter.query}
      onChange={e => setFilter({...filter, query: e.target.value})}
      placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="sort by"
        options={[
          {value:'title', name: "By title" },
          {value:'body', name: "By description" },
        ]}
      />
    </div>
    );
};

export default PostFilter;
