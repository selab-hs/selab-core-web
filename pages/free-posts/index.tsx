import Link from 'next/link';
import { BiSearchAlt2 } from 'react-icons/bi';

import * as S from '../../domains/free-posts/style';
import { timeForToday } from '@components/utils/timeForToday';
import { useGetFreePosts } from '@domains/free-posts/useGetFreePosts';
import { FreePostType } from '@domains/free-posts/types';

const FreePosts = () => {
  const freePosts = useGetFreePosts();

  return (
    <S.FreePostsWrapper>
      <S.SearchWrapper>
        <S.Search type="text" id="search" placeholder="검색" />
        <S.SearchSubmit>
          <BiSearchAlt2 size={20} cursor="pointer" />
        </S.SearchSubmit>
      </S.SearchWrapper>
      {freePosts &&
        freePosts.map((data: FreePostType) => {
          return (
            <Link href={`/free-posts/${data.freePostId}`} key={data.freePostId} passHref>
              <S.Post>
                <S.Title>{data.title}</S.Title>
                <S.Content>{data.content}</S.Content>
                <S.Detail>{`${timeForToday(data.createdAt)} • 작성자: ${data.memberId}`}</S.Detail>
              </S.Post>
            </Link>
          );
        })}
    </S.FreePostsWrapper>
  );
};

export default FreePosts;
