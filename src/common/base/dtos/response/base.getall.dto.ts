import { ApiProperty } from '@nestjs/swagger';
import { IGetAllResult } from '../../../interfaces/getallresult';

export class BaseGetAllResponseDTO implements IGetAllResult {
  @ApiProperty({
    description: 'Total records stored',
  })
  count: number;

  @ApiProperty({
    description: 'Total items per page',
  })
  limit: number;

  @ApiProperty({
    description: 'Page current',
  })
  page: number;

  @ApiProperty({
    description: 'Total Pages',
  })
  totalPages: number;

  data: any[];

  constructor(data: {
    count: number;
    limit: number;
    page: number;
    totalPages: number;
  }) {
    this.count = data.count;
    this.limit = data.limit;
    this.page = data.page;
    this.totalPages = data.totalPages;
  }
}
