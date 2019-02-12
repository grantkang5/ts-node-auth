import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Main = () => {
  const [value, handleChange] = useState<number | null>(2)

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      style={{ padding: 15 }}
      onChange={(e, value) => handleChange(value)}
      variant="fullWidth"
    >
      <Tab label="Page 1" />
      <Tab label="Page 2" />
      <Tab label="Page 3" />
      <Tab label="Page X" />
    </Tabs>
  )
}

export default Main