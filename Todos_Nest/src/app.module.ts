import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {TodoModule} from "./todos/todos.module";
import {AppController} from "./app.controller";

@Module({
	imports: [
		TodoModule,
		MongooseModule.forRoot("mongodb://localhost:27017/todos_nest"),
	],
	controllers: [AppController],
	providers: [],
})
export class AppModule {
}
