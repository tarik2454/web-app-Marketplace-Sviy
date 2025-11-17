import { StaticImageData } from "next/image";

type Feedback = {
  id: number;
  orderImage: StaticImageData;
  title: string;
  rating: number;
  date: string;
  reviewer: string;
  reviewDate: string;
  reviewStatus: boolean;
  reviewText: string;
}

export default Feedback;