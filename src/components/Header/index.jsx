import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Dropdown,
  HeaderContainer,
  HeaderFlex,
  IconsContainer,
  Logo,
  ProfileMenu,
  ProfileSection,
  UserName,
} from "./style";

export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDownToggle = () => {
    setDropDown(!dropDown);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderFlex>
          <Logo />
          <ProfileSection>
            <Button>
              <img src="/icons/info.svg" alt="release notes" />
              Release note
            </Button>
            <Button light>
              <img src="/icons/new-listing.svg" alt="new listing" /> New Listing
            </Button>
            <IconsContainer>
              <Button icon>
                <img src="/icons/mic.svg" alt="mic" />
              </Button>
              <Button icon>
                <img src="/icons/notification.svg" alt="mic" />
              </Button>
              <Button icon>
                <img src="/icons/settings.svg" alt="mic" />
              </Button>
            </IconsContainer>
            <Dropdown>
              <img src="icons/user.svg" alt="user" />
              <UserName>Ahmed Ali</UserName>
              <img
                src="icons/arrow-up.svg"
                alt="arrow"
                onClick={handleDropDownToggle}
              />
            </Dropdown>
            {dropDown && (
              <ProfileMenu>
                <Link href="#">Profile</Link>
                <Link href="#">Logout</Link>
              </ProfileMenu>
            )}
          </ProfileSection>
        </HeaderFlex>
      </HeaderContainer>
    </>
  );
}
