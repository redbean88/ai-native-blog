interface AuthorProfileProps {
  author: {
    name: string;
    bio: string;
    avatarUrl: string;
  };
}

export default function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <div className="flex items-center gap-4">
        <img
          src={author.avatarUrl}
          alt={`${author.name}의 프로필 사진`}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">{author.name}</h3>
          <p className="mt-1 text-sm text-gray-600">{author.bio}</p>
        </div>
      </div>
    </div>
  );
}
