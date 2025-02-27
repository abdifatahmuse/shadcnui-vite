import { ArrowRightIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Button, Callout, Flex, Text } from "@radix-ui/themes";
import { Dialog } from "radix-ui";
import { useState } from "react";
import Login from "./app/auth/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-x-7 space-y-7">
      <Login />

      <Text>Hello from Radix Themes :)</Text>
      <Flex gap="2" className="grid grid-cols-3">
        <Button onClick={() => setCount((count) => count + 1)}>Add</Button>
        {count}
        <Button onClick={() => setCount((count) => count - 1)}>Dedicate</Button>
      </Flex>
      <Flex gap="3" align="center">
        <Button variant="classic">
          Get started <ArrowRightIcon />
        </Button>
        <Button variant="solid">
          Get started <ArrowRightIcon />
        </Button>
        <Button variant="soft">
          Get started <ArrowRightIcon />
        </Button>
      </Flex>

      <Flex align="start" direction={{ initial: "column", sm: "row" }} gap="4">
        <Callout.Root>
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            <Flex as="span" align="center" gap="4">
              <Text>There are new commits.</Text>
              <Button variant="surface" size="1" my="-2">
                Refresh
              </Button>
            </Flex>
          </Callout.Text>
        </Callout.Root>

        <Callout.Root color="gray">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            <Flex as="span" align="center" gap="4">
              <Text>There are new commits.</Text>
              <Button variant="surface" size="1" my="-2">
                Refresh
              </Button>
            </Flex>
          </Callout.Text>
        </Callout.Root>
      </Flex>

      <MyCustomDialog />
    </div>
  );
}

export default App;

function MyCustomDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
