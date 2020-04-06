// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get isBlacklisted(): boolean {
    let value = this.get("isBlacklisted");
    return value.toBoolean();
  }

  set isBlacklisted(value: boolean) {
    this.set("isBlacklisted", Value.fromBoolean(value));
  }
}

export class Index extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Index entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Index entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Index", id.toString(), this);
  }

  static load(id: string): Index | null {
    return store.get("Index", id) as Index | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get signerToken(): string {
    let value = this.get("signerToken");
    return value.toString();
  }

  set signerToken(value: string) {
    this.set("signerToken", Value.fromString(value));
  }

  get senderToken(): string {
    let value = this.get("senderToken");
    return value.toString();
  }

  set senderToken(value: string) {
    this.set("senderToken", Value.fromString(value));
  }
}

export class Stake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Stake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Stake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Stake", id.toString(), this);
  }

  static load(id: string): Stake | null {
    return store.get("Stake", id) as Stake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get staker(): Bytes {
    let value = this.get("staker");
    return value.toBytes();
  }

  set staker(value: Bytes) {
    this.set("staker", Value.fromBytes(value));
  }

  get signerToken(): string {
    let value = this.get("signerToken");
    return value.toString();
  }

  set signerToken(value: string) {
    this.set("signerToken", Value.fromString(value));
  }

  get senderToken(): string {
    let value = this.get("senderToken");
    return value.toString();
  }

  set senderToken(value: string) {
    this.set("senderToken", Value.fromString(value));
  }

  get protocol(): Bytes {
    let value = this.get("protocol");
    return value.toBytes();
  }

  set protocol(value: Bytes) {
    this.set("protocol", Value.fromBytes(value));
  }

  get stakeAmount(): BigInt | null {
    let value = this.get("stakeAmount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set stakeAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("stakeAmount");
    } else {
      this.set("stakeAmount", Value.fromBigInt(value as BigInt));
    }
  }
}
