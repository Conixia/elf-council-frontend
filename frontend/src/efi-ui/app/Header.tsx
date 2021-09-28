import React, { ReactElement } from "react";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { ConnectWalletButton } from "src/efi-ui/wallet/ConnectWalletButton/ConnectWalletButton";
import tw from "src/elf-tailwindcss-classnames";
import { useWeb3React } from "@web3-react/core";

function Header(): ReactElement {
  const { account, active, chainId } = useWeb3React();
  return (
    <div className={tw("flex", "justify-between")}>
      <div className={tw("flex", "space-x-3")}></div>
      <div className={tw("flex", "space-x-4", "text-gray-400", "mr-3")}>
        <NotificationsIcon />
        <ExitToAppIcon />
        <ConnectWalletButton
          account={account}
          walletConnectionActive={active}
          chainId={chainId}
        />
      </div>
    </div>
  );
}

export default Header;
