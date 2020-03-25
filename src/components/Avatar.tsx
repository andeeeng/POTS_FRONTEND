import React from 'react'

import { Avatar, Icon } from 'antd'

export interface IAvatarProps {
  size?: any
}

const AvatarComponent = (props: IAvatarProps) => {
  const { size } = props
  return (
    <div>
      <Avatar
        icon="user"
        size={size}
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
