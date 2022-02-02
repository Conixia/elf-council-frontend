import { ReactElement, useMemo } from "react";
import { t } from "ttag";
import H2 from "src/ui/base/H2/H2";
import DelegateProfile from "src/ui/delegate/DelegatesList/DelegateProfile";
import { delegates } from "src/elf-council-delegates/delegates";
import shuffle from "lodash.shuffle";

interface DelegatesListProps {
  account: string | null | undefined;
  selectedDelegate: string;
  setDelegateAddressInput: (address: string) => void;
  setSelectedDelegate: (address: string) => void;
  setIsSelfDelegated: (state: boolean) => void;
}

function DelegatesList({
  account,
  selectedDelegate,
  setDelegateAddressInput,
  setSelectedDelegate,
  setIsSelfDelegated,
}: DelegatesListProps): ReactElement {
  // shuffle the delegates list on first render to prevent biases
  const shuffledDelegates = useMemo(() => {
    return shuffle(delegates);
  }, []);

  return (
    <div className="relative mb-8">
      <H2 className="mb-4 text-2xl text-principalRoyalBlue tracking-wide">{t`Explore Featured Delegates`}</H2>

      {/* List of delegates */}
      <ul
        className="grid pr-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-3 overflow-y-scroll"
        // 428px exactly matches 5 rows of the list
        style={{ maxHeight: "428px" }}
      >
        {shuffledDelegates.map((delegate, idx) => {
          const handleSelectDelegate = () => {
            setSelectedDelegate(delegate.address);
            setDelegateAddressInput("");

            if (delegate.address === account) {
              setIsSelfDelegated(true);
            } else {
              setIsSelfDelegated(false);
            }
          };

          // TODO: Remove -${idx} for production since addresses are always unique
          return (
            <li key={`${delegate.address}-${idx}}`}>
              <DelegateProfile
                selected={delegate.address === selectedDelegate}
                delegate={delegate}
                onSelectDelegate={handleSelectDelegate}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DelegatesList;
