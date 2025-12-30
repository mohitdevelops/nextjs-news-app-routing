import { DUMMY_NEWS } from "@/utils/news-data";
import { notFound } from "next/navigation";
import NewsImageDialog from "./dialog";

export default function NewsImage({ params }) {
	const newsSlug = params.newsSlug;
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
	if (!newsItem) {
		return notFound();
	}

	return (
		<>
			<NewsImageDialog />
			<dialog className="modal" open>
				<div className="fullscreen-image">
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	);
}
