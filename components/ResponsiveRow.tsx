import React from 'react'
import { Col, Row } from 'antd'
import { breakpoints } from '../utils/breakpoints'

interface ResponsiveRowProps {
  children: React.ReactNode
  leftColumn?: React.ReactNode
}

export const ResponsiveRow = ({
  children,
  leftColumn,
}: ResponsiveRowProps): JSX.Element => {
  const getSideSize = centerSize => (24 - centerSize) / 2
  const { MOBILE, TABLET, DESKTOP } = breakpoints
  return (
    <Row>
      <Col xs={getSideSize(MOBILE)} sm={getSideSize(TABLET)} lg={8}>
        {leftColumn}
      </Col>
      <Col xs={MOBILE} sm={TABLET} lg={DESKTOP}>
        {children}
      </Col>
      <Col xs={getSideSize(MOBILE)} sm={getSideSize(TABLET)} lg={8}></Col>
    </Row>
  )
}
