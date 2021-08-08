import React from 'react'
import { Tooltip, Button } from 'antd'
import Link from 'next/link'
import { ArrowLeftOutlined } from '@ant-design/icons'

export const Return = (): JSX.Element => (
  <Tooltip title="Go back">
    <Link href="/" passHref>
      <Button
        type="primary"
        shape="circle"
        icon={<ArrowLeftOutlined />}
      ></Button>
    </Link>
  </Tooltip>
)
