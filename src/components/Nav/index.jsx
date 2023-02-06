import React from "react";
import NavItem from "./NavItem";
import Search from "./Search";
import { Nav, NavContainer } from "./style";
import Welcome from "./Welcome";

export default function index() {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavItem
            href="/"
            name="Dashboard"
            src="/icons/dashboard.svg"
            active
          />
          <NavItem href="" name="Listings" src="/icons/listings.svg" />
          <NavItem href="" name="Contacts" src="/icons/contact.svg" />
          <NavItem href="" name="Account" src="/icons/account.svg" />
          <NavItem href="" name="Request" src="/icons/request.svg" />
          <NavItem href="" name="Insight" src="/icons/insights.svg" />
          <Search />
        </NavContainer>
      </Nav>
      <Welcome />
    </>
  );
}
