import NewsList from "@/components/news-list";
import { getAllNews } from "@/utils/news";

export default async function NewsPage() {
	const news = await getAllNews();
	return (
		<div id="news">
			<h1>News Page</h1>
			<NewsList news={news} />
		</div>
	);
}
