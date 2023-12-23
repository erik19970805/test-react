import { CardList } from "@/components/cardList";

export default function ListPage() {
  return (
    <div className="grid h-full">
      {/* <Suspense fallback={<Loading />}> */}
      <CardList />
      {/* </Suspense> */}
    </div>
  );
}
