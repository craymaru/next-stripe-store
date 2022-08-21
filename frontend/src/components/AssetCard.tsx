import { FC } from "react"

import { Badge, Card, CardSection, Image, Text } from "@mantine/core"

type Props = {
  name?: string
  author?: string | null
  status?: string
  imageUrl?: string
}

const AssetCard: FC<Props> = ({ name = "", author = "", status, imageUrl }) => {
  return (
    <Card shadow="lg" radius={10} p={0}>
      <CardSection>
        <Image src={imageUrl} height={240} alt="With defualt placeholder" withPlaceholder />
      </CardSection>

      <div className="flex items-center p-4">
        <div className="overflow-hidden">
          <div className="flex items-center">
            <Text className="truncate text-xs text-white">{`${name} ${name} ${name}`}</Text>
            <Badge color="indigo" radius="lg" variant="filled" ml="xs" style={{ overflow: "visible" }}>
              {status}
            </Badge>
          </div>
          <div className="mt-1 truncate text-xs">{author}</div>
        </div>
        <div className="ml-auto flex items-end pl-4">
          <div className="al-dropdown relative">
            <div className="mr-4 cursor-pointer">
              <div className="block">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.7188 6.09375C16.0625 5.78125 16.0625 5.25 15.7188 4.9375L10.2188 0.1875C9.75 -0.21875 9 0.125 9 0.78125V3.28125C3.96875 3.3125 0 4.34375 0 9.09375C0 11 1.21875 12.9062 2.59375 13.9062C3.03125 14.2188 3.625 13.8125 3.46875 13.3125C2.0625 8.78125 4.125 7.59375 9 7.53125V10.2812C9 10.9062 9.75 11.25 10.2188 10.8438L15.7188 6.09375Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="block">
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.4414 5.72656L7.875 8.29297V2C7.875 1.40234 7.34766 0.875 6.75 0.875C6.11719 0.875 5.625 1.40234 5.625 2V8.29297L3.02344 5.72656C2.8125 5.51562 2.53125 5.375 2.25 5.375C1.93359 5.375 1.65234 5.51562 1.44141 5.72656C0.984375 6.14844 0.984375 6.88672 1.44141 7.30859L5.94141 11.8086C6.36328 12.2656 7.10156 12.2656 7.52344 11.8086L12.0234 7.30859C12.4805 6.88672 12.4805 6.14844 12.0234 5.72656C11.6016 5.26953 10.8633 5.26953 10.4414 5.72656ZM12.375 14.375H1.125C0.492188 14.375 0 14.9023 0 15.5C0 16.1328 0.492188 16.625 1.125 16.625H12.375C12.9727 16.625 13.5 16.1328 13.5 15.5C13.5 14.9023 12.9727 14.375 12.375 14.375Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default AssetCard
