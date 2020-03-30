import React from 'react'

import { Avatar, Icon } from 'antd'

export interface IAvatarProps {}

const AvatarComponent = (props: IAvatarProps) => {
  const {} = props
  return (
    <div>
      <Avatar
        size={60}
        icon="user"
        style={{
          backgroundColor: '#3182CE',
          color: 'white',
          marginRight: '10px',
        }}
      />
    </div>
  )
}

export default AvatarComponent
