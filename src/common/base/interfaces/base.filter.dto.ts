import { IBaseOrderByDTO } from './base.orderby.dto';
import { IBasePaginationDTO } from './base.pagination.dto';
import { IBasePatternDTO } from './base.pattern.dto';

export interface IBaseFilter extends IBaseOrderByDTO, IBasePaginationDTO {
  withDeleted?: boolean;
  withRelations?: boolean;
  patternMatching?: IBasePatternDTO;
}
