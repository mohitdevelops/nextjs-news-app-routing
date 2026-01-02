import NewsList from "@/components/news-list";
import { getLatestNews } from "@/utils/news";

export default async function LatestPage() {
	const latestNews = await getLatestNews();
	return (
		<>
			<h2>Latest Page</h2>
			<NewsList news={latestNews} />
		</>
	);
}
