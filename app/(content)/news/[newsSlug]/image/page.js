import { DUMMY_NEWS } from "@/utils/news-data";
import { notFound } from "next/navigation";

export default function NewsImage({ params }) {
	const newsSlug = params.newsSlug;
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
	if (!newsItem) {
		return notFound();
	}

	return (
		<div className="fullscreen-image">
			<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
		</div>
	);
}
