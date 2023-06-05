"use client";
import {
  Link,
  Navbar,
  NavbarCollapseItemProps,
  Text,
  useTheme,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { theme } = useTheme();
  const [visible, toggle] = useState<"lg" | "xs">("lg");
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text b color="inherit">
          Harriet Tubman: Biografia
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="lg"
        variant="highlight"
      >
        <Navbar.Link href="#summary" isActive>
          Resumo
        </Navbar.Link>
        <Navbar.Link href="#slavery">Escravidão</Navbar.Link>
        <Navbar.Link href="#freedom">Liberdade</Navbar.Link>
        <Navbar.Link href="#war">Guerra</Navbar.Link>
        <Navbar.Link href="#legacy">Legado</Navbar.Link>
        <Navbar.Link href="#sources">Fontes</Navbar.Link>
      </Navbar.Content>
      <Navbar.Toggle showIn="lg" />
      <Navbar.Collapse>
        <Navbar.CollapseItem>
          <Link href="#summary" color="primary">
            Resumo
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="#slavery" color="text">
            Escravidão
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="#freedom" color="text">
            Liberdade
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="#war" color="text">
            Guerra
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="#legacy" color="text">
            Legado
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="#sources" color="text">
            Fontes
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}
