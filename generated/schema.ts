import {
    TypedMap,
    Entity,
    Value,
    ValueKind,
    store,
    Bytes,
    BigInt,
    BigDecimal
  } from "@graphprotocol/graph-ts";
  
  export class Token extends Entity {
    constructor(id: string) {
      super();
      this.set("id", Value.fromString(id));
  
      this.set("tokenID", Value.fromBigInt(BigInt.zero()));
      this.set("name", Value.fromString(""));
      this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
      this.set("creator", Value.fromString(""));
      this.set("owner", Value.fromString(""));
    }
  
    save(): void {
      let id = this.get("id");
      assert(id != null, "Cannot save Token entity without an ID");
      if (id) {
        assert(
          id.kind == ValueKind.STRING,
          "Cannot save Token entity with non-string ID. " +
            'Considering using .toHex() to convert the "id" to a string.'
        );
        store.set("Token", id.toString(), this);
      }
    }
  
    static load(id: string): Token | null {
      return changetype<Token | null>(store.get("Token", id));
    }
  
    get id(): string {
      let value = this.get("id");
      return value!.toString();
    }
  
    set id(value: string) {
      this.set("id", Value.fromString(value));
    }
  
    get tokenID(): BigInt {
      let value = this.get("tokenID");
      return value!.toBigInt();
    }
  
    set tokenID(value: BigInt) {
      this.set("tokenID", Value.fromBigInt(value));
    }
  
    get contentURI(): string | null {
      let value = this.get("contentURI");
      if (!value || value.kind == ValueKind.NULL) {
        return null;
      } else {
        return value.toString();
      }
    }
  
    set contentURI(value: string | null) {
      if (!value) {
        this.unset("contentURI");
      } else {
        this.set("contentURI", Value.fromString(<string>value));
      }
    }
  
    get tokenIPFSPath(): string | null {
      let value = this.get("tokenIPFSPath");
      if (!value || value.kind == ValueKind.NULL) {
        return null;
      } else {
        return value.toString();
      }
    }
  
    set tokenIPFSPath(value: string | null) {
      if (!value) {
        this.unset("tokenIPFSPath");
      } else {
        this.set("tokenIPFSPath", Value.fromString(<string>value));
      }
    }
  
    get name(): string {
      let value = this.get("name");
      return value!.toString();
    }
  
    set name(value: string) {
      this.set("name", Value.fromString(value));
    }
  
    get createdAtTimestamp(): BigInt {
      let value = this.get("createdAtTimestamp");
      return value!.toBigInt();
    }
  
    set createdAtTimestamp(value: BigInt) {
      this.set("createdAtTimestamp", Value.fromBigInt(value));
    }
  
    get creator(): string {
      let value = this.get("creator");
      return value!.toString();
    }
  
    set creator(value: string) {
      this.set("creator", Value.fromString(value));
    }
  
    get owner(): string {
      let value = this.get("owner");
      return value!.toString();
    }
  
    set owner(value: string) {
      this.set("owner", Value.fromString(value));
    }
  }
  
  export class User extends Entity {
    constructor(id: string) {
      super();
      this.set("id", Value.fromString(id));
    }
  
    save(): void {
      let id = this.get("id");
      assert(id != null, "Cannot save User entity without an ID");
      if (id) {
        assert(
          id.kind == ValueKind.STRING,
          "Cannot save User entity with non-string ID. " +
            'Considering using .toHex() to convert the "id" to a string.'
        );
        store.set("User", id.toString(), this);
      }
    }
  
    static load(id: string): User | null {
      return changetype<User | null>(store.get("User", id));
    }
  
    get id(): string {
      let value = this.get("id");
      return value!.toString();
    }
  
    set id(value: string) {
      this.set("id", Value.fromString(value));
    }
  
    get tokens(): Array<string> {
      let value = this.get("tokens");
      return value!.toStringArray();
    }
  
    set tokens(value: Array<string>) {
      this.set("tokens", Value.fromStringArray(value));
    }
  
    get created(): Array<string> {
      let value = this.get("created");
      return value!.toStringArray();
    }
  
    set created(value: Array<string>) {
      this.set("created", Value.fromStringArray(value));
    }
  }