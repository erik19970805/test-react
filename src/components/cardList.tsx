"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Loading } from "./loading";

interface IUserList {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

export const CardList = () => {
  const [list, setList] = useState<IUserList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const callApi = useCallback(() => {
    return new Promise<IUserList[]>((resolve) => {
      setTimeout(async () => {
        const response = await fetch(
          "https://6172cfe5110a740017222e2b.mockapi.io/elements"
        );
        resolve(await response.json());
      }, 2000);
    });
  }, []);

  useEffect(() => {
    if (loading) {
      callApi().then((response) => {
        setList(response);
        setLoading(false);
      });
    }
  }, [callApi, loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid gap-2 place-content-center p-4" role="list">
          {list.map((item) => (
            <div
              role="listitem"
              key={item.id}
              className="flex items-center gap-2 border border-gray-500 rounded-md p-4"
            >
              <div>
                <Image
                  src={{
                    default: {
                      src: "https://st.depositphotos.com/1186248/2404/i/450/depositphotos_24043595-stock-photo-fake-rubber-stamp.jpg",
                      width: 50,
                      height: 50,
                    },
                    src: item.avatar,
                  }}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <span aria-label="cardName" className="font-bold text-xl">
                  {item.name}
                </span>
                <p>
                  <strong>Created At: </strong>
                  <span aria-label="cardCreatedAt" className="text-gray-600">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
