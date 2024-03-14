import {
  Column,
  Entity,
  Generated,
  Index,
  PrimaryColumn,
} from "typeorm/index.js";

@Entity()
export class Document {
  @PrimaryColumn("varchar")
  @Generated("uuid")
  id!: number;

  @Index("document-name-idx", { unique: true })
  @Column("varchar")
  name!: string;

  @Column("bytea")
  data!: Buffer;
}
