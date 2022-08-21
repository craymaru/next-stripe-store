import { Input } from "@mantine/core"
import { IconSearch } from "@tabler/icons"

const SearchInput = () => {
  return (
    <Input
      placeholder="Search"
      radius="xl"
      size="md"
      rightSection={
        <div style={{ paddingRight: 16 }}>
          <IconSearch size={18} style={{ display: "block", opacity: 0.5 }} />
        </div>
      }
    />
  )
}

export default SearchInput
