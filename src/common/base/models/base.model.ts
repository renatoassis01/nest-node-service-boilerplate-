import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { IBaseAuditModel } from '../interfaces/base.audit.model';
import { IBaseTenantIdModel } from '../interfaces/base.tenantid.model';

export abstract class BaseModel implements IBaseAuditModel, IBaseTenantIdModel {
  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'uuid' })
  tenantId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
