import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model.ts/top-page.model.ts';
import { FindTopPageDto } from './dto/find-top-page.dto.js';

@Controller('top-page')
export class TopPageController {

	@Post('create')
		async create(@Body() dto:Omit<TopPageModel,'_id'>){}
	
		@Get(':id')
		async get(@Param('id') id:string){}
	
		@Delete(':id')
		async delete(@Param('id') id:string){}
	
		@Patch(':id')
		async update(@Param('id') id:string, @Body() dto: TopPageModel){}
	
		@HttpCode(200)
		@Post()
		async find(@Body() dto:FindTopPageDto){}

}
