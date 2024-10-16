/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Contacts, ContactsInterface } from "../Contacts";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "phone",
        type: "uint256",
      },
    ],
    name: "ContactCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "_admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "contacts",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "phone",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_phone",
        type: "uint256",
      },
    ],
    name: "createContact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50600080546001600160a01b03191633179055610671806100316000396000f3fe6080604052600436106100385760003560e01c806301bc45c9146100ad57806356ecafc7146100ea578063e0f478cb1461010c57610078565b3661007857604080513381523460208201527f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587491015b60405180910390a1005b604080513381523460208201527f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f88525874910161006e565b3480156100b957600080fd5b506000546100cd906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100f657600080fd5b5061010a6101053660046103eb565b61013b565b005b34801561011857600080fd5b5061012c61012736600461045e565b6101fc565b6040516100e1939291906104bd565b6040805160608101825284815260208101849052908101829052600180548082018255600091909152815160039091027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190819061019a908261057c565b50602082015160018201906101af908261057c565b506040820151816002015550507f487f94037cb390713b1c694d60144941859c8ec426cf55db82ea272986bca5a38383836040516101ef939291906104bd565b60405180910390a1505050565b6001818154811061020c57600080fd5b906000526020600020906003020160009150905080600001805461022f906104f3565b80601f016020809104026020016040519081016040528092919081815260200182805461025b906104f3565b80156102a85780601f1061027d576101008083540402835291602001916102a8565b820191906000526020600020905b81548152906001019060200180831161028b57829003601f168201915b5050505050908060010180546102bd906104f3565b80601f01602080910402602001604051908101604052809291908181526020018280546102e9906104f3565b80156103365780601f1061030b57610100808354040283529160200191610336565b820191906000526020600020905b81548152906001019060200180831161031957829003601f168201915b5050505050908060020154905083565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261036d57600080fd5b813567ffffffffffffffff81111561038757610387610346565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103b6576103b6610346565b6040528181528382016020018510156103ce57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060006060848603121561040057600080fd5b833567ffffffffffffffff81111561041757600080fd5b6104238682870161035c565b935050602084013567ffffffffffffffff81111561044057600080fd5b61044c8682870161035c565b93969395505050506040919091013590565b60006020828403121561047057600080fd5b5035919050565b6000815180845260005b8181101561049d57602081850181015186830182015201610481565b506000602082860101526020601f19601f83011685010191505092915050565b6060815260006104d06060830186610477565b82810360208401526104e28186610477565b915050826040830152949350505050565b600181811c9082168061050757607f821691505b60208210810361052757634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561057757806000526020600020601f840160051c810160208510156105545750805b601f840160051c820191505b818110156105745760008155600101610560565b50505b505050565b815167ffffffffffffffff81111561059657610596610346565b6105aa816105a484546104f3565b8461052d565b6020601f8211600181146105de57600083156105c65750848201515b600019600385901b1c1916600184901b178455610574565b600084815260208120601f198516915b8281101561060e57878501518255602094850194600190920191016105ee565b508482101561062c5786840151600019600387901b60f8161c191681555b50505050600190811b0190555056fea26469706673582212208ce333c39bd829a062207cfcb616c0b43780ba148f2afa9090abb67459766ade64736f6c634300081b0033";

type ContactsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContactsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Contacts__factory extends ContractFactory {
  constructor(...args: ContactsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Contacts & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Contacts__factory {
    return super.connect(runner) as Contacts__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContactsInterface {
    return new Interface(_abi) as ContactsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Contacts {
    return new Contract(address, _abi, runner) as unknown as Contacts;
  }
}
