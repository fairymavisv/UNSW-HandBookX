import {Controller, Get, Post, HttpException, HttpStatus, Param, Put, Query, Body} from '@nestjs/common';
import {CourseService } from './course.service';
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {CommentDto, CourseDto, CreateCommentDto} from "./course.dto";



@Controller('course')
export class CourseController {
    constructor(private readonly programService: CourseService) {}


    @Get(':CourseCode')
    @ApiOperation({ summary: 'Get given Course info' })
    @ApiResponse({ status: 404, description: 'Course code not found' })
    @ApiResponse({
        status: 200,
        description: 'The Course details',
        type: CourseDto,
    })
    async getCourseInfo(@Param('CourseCode') CourseCode: string) {
        try {
            //统一将输入的 code 转化为大写
            const upperCaseCode = CourseCode.toUpperCase();
            const CourseInfo = await this.programService.getCourseInfo(upperCaseCode);
            if (!CourseInfo) {
                throw new HttpException('Program not found', HttpStatus.NOT_FOUND);
            }
            return CourseInfo;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post("comment")
    @ApiOperation({ summary: 'create Course comment' })
    @ApiResponse({ status: 404, description: 'Course code not found' })
    @ApiResponse({
        status: 200,
        description: 'The Course details',
        type: CreateCommentDto, // 指定返回的类型是 UserDto
    })
    async createCourseComment(@Body() createCommentDto: CreateCommentDto){
        try {
            const { courseCode, userId, text, rating } = createCommentDto;
            //统一将输入的 code 转化为大写
            const upperCaseCode = courseCode.toUpperCase();
            console.log(createCommentDto);
            console.log("upperCaseCode", upperCaseCode);

            const comment = await this.programService.createCourseComment(upperCaseCode, userId, text, rating);
            if (!comment) {
                throw new HttpException('create comment failed', HttpStatus.NOT_FOUND);
            }
            return comment;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
