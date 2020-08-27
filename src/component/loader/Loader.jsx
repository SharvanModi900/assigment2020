import React from "react"
import ContentLoader from "react-content-loader"

const CourseDashboardLoader = () => (
  <ContentLoader
    height={200}
    width={440}
    speed={2}
    primaryColor="#f1f5f2"
    secondaryColor="#c1c2bc"
  >
    <rect x="6" y="35" rx="0" ry="0" width="27" height="26" />
    <rect x="41" y="51" rx="0" ry="0" width="127" height="6" />
    <rect x="8" y="77" rx="0" ry="0" width="27" height="26" />
    <rect x="40" y="97" rx="0" ry="0" width="127" height="6" />
    <rect x="8" y="113" rx="0" ry="0" width="26" height="26" />
    <rect x="44" y="130" rx="0" ry="0" width="127" height="6" />
    <rect x="182" y="48" rx="0" ry="0" width="27" height="11" />
    <rect x="190" y="108" rx="0" ry="0" width="127" height="26" />
    <rect x="188" y="75" rx="0" ry="0" width="127" height="4" />
  </ContentLoader>
)

export default CourseDashboardLoader