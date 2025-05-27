import Button from '@/shared/ui/button';

type FollowingProps = {
  isFollowing: boolean;
  followerHandler: () => void;
};

export default function SubscriptionPres({
  isFollowing,
  followerHandler,
}: FollowingProps) {
  return (
    <>
      <div onClick={followerHandler}>
        <Button variants={isFollowing ? 'secondary' : 'active'} size="small">
          {isFollowing ? '팔로잉' : '팔로우'}
        </Button>
      </div>
    </>
  );
}
