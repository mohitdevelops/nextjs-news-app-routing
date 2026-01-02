import { getNewsItem } from "@/utils/news";
import { notFound } from "next/navigation";

export default async function NewsImage({ params }) {
	const newsSlug = params.newsSlug;
	const newsItem = await getNewsItem(newsSlug);
	// const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
	if (!newsItem) {
		return notFound();
	}

	return (
		<div className="fullscreen-image">
			<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
		</div>
	);
}
