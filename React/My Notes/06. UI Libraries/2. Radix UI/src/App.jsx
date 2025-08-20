import {
  Avatar,
  Flex,
  Text,
  Button,
  Box,
  Heading,
  Link,
  Strong,
  Inset,
} from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";
import * as HoverCard from "@radix-ui/react-hover-card"; // ✅ HoverCard components
export default function App() {
  return (
    <div>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>

      <br />

      {/* Aavatar */}
      <Flex gap="2">
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <Avatar fallback="A" />
      </Flex>

      <br />

      {/* Avatar sizes */}
      <Flex align="center" gap="4">
        <Avatar
          size="1"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <Avatar
          size="2"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <Avatar
          size="3"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <Avatar
          size="4"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <Avatar
          size="5"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <Avatar
          size="6"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <Avatar
          size="7"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <Avatar
          size="8"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
      </Flex>

      <br />

      {/* Hover Card */}
      <Text>
        Follow{" "}
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Link href="https://twitter.com/radix_ui" target="_blank">
              @radix_ui
            </Link>
          </HoverCard.Trigger>
          <HoverCard.Content maxWidth="300px">
            <Flex gap="4">
              <Avatar
                size="3"
                fallback="R"
                radius="full"
                src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
              />
              <Box>
                <Heading size="3" as="h3">
                  Radix
                </Heading>
                <Text as="div" size="2" color="gray" mb="2">
                  @radix_ui
                </Text>
                <Text as="div" size="2">
                  React components, icons, and colors for building high-quality,
                  accessible UI.
                </Text>
              </Box>
            </Flex>
          </HoverCard.Content>
        </HoverCard.Root>{" "}
        for updates.
      </Text>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      {/* HoverCard with insent */}
      <Text>
        Technology revolutionized{" "}
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Link href="#">typography</Link>
          </HoverCard.Trigger>

          <HoverCard.Content width="450px">
            <Flex>
              <Box asChild flexShrink="0">
                <Inset side="left" pr="current">
                  <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?&auto=format&fit=crop&w=300&q=90"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      height: "100%",
                      width: 150,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
              </Box>

              <Text size="2" as="p">
                <Strong>Typography</Strong> is the art and technique of
                arranging type to make written language legible, readable and
                appealing when displayed. The arrangement of type involves
                selecting typefaces, point sizes, line lengths, line-spacing
                (leading), and letter-spacing (tracking)…
              </Text>
            </Flex>
          </HoverCard.Content>
        </HoverCard.Root>{" "}
        in the latter twentieth century.
      </Text>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Button with bookmarkicon */}
      <Button>
        <BookmarkIcon /> Bookmark
      </Button>
    </div>
  );
}
