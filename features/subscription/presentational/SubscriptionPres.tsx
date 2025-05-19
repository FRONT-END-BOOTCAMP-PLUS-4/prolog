import Button from '@/shared/ui/button';

type followingProps = {
  isFollowing: boolean;
  followerHandler: () => void;
};

export default function SubscriptionPres({
  isFollowing,
  followerHandler,
}: followingProps) {
  const followButtonStyle = isFollowing ? { color: '#6A5AE0' } : undefined;
  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div onClick={followerHandler}>
        <Button
          variants={isFollowing ? 'basic' : 'active'}
          size="small"
          style={followButtonStyle}
        >
          {isFollowing ? '팔로잉' : '팔로우'}
        </Button>
      </div>
    </>
  );
}
