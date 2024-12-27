export type AddCourseFormType= {
    course_name: string;
    course_description: string;
    course_image_url: string;
}
export type AddImageResponse= {
    url: string;
}
export type CourseNameResponse= {
    id: string;
    course_name: string;
}