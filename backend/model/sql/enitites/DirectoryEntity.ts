import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DirectoryDTO} from "../../../../common/entities/DirectoryDTO";
import {PhotoEntity} from "./PhotoEntity";

@Entity()
export class DirectoryEntity implements DirectoryDTO {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  path: string;

  @Column()
  public lastModified: number;
  @Column()
  public lastScanned: number;

  @Column()
  public scanned: boolean;

  isPartial?: boolean;

  @ManyToOne(type => DirectoryEntity, directory => directory.directories, {onDelete: "CASCADE"})
  public parent: DirectoryEntity;

  @OneToMany(type => DirectoryEntity, dir => dir.parent)
  public directories: Array<DirectoryEntity>;

  @OneToMany(type => PhotoEntity, photo => photo.directory)
  public photos: Array<PhotoEntity>;

}
