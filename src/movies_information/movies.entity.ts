import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type MoviesDocument = Movies & Document;

@Schema({ timestamps: true })
export class Movies {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: string;

  @Prop({ type: String, required: [true, 'movie_title is required'] })
  movie_title: string;

  @Prop({ type: String, required: [true, 'movie_description is required'] })
  movie_description: string;

  @Prop({ type: String, required: [true, 'movie_thumbnail_image is required'] })
  movie_thumbnail_image: string;

  @Prop({ type: String, required: [true, 'movie_image is required'] })
  movie_image: string;

  @Prop({ type: String, required: [true, 'Catagory is required'] })
  movie_catagory: string;

  @Prop({ type: String, required: [true, 'movie_language is required'] })
  movie_language: string;

  @Prop({ type: Number, required: [true, 'movie_year is required'] })
  movie_year: number;

  @Prop({ type: Number, required: [true, 'movie_time_duration is required'] })
  movie_time_duration: number;

  @Prop({ type: String, required: [true, 'movie_video_url is required'] })
  movie_video_url: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Cast' }])
  movie_casts: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Reviews' }])
  movie_reviews: string;

  @Prop({ type: Number, default: 0 })
  movie_number_of_reviews: number;

  @Prop({ type: Number, default: 0 })
  movie_rating: number;
}

export const moviesSchema = SchemaFactory.createForClass(Movies);