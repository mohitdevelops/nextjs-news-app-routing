import { notFound } from "next/navigation";
import NewsImageDialog from "./dialog";
import { getNewsItem } from "@/utils/news";

export default async function NewsImage({ params }) {
	const newsSlug = params.newsSlug;
	const newsItem = await getNewsItem(newsSlug);

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
