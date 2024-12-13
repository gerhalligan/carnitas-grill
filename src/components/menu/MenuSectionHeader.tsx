interface MenuSectionHeaderProps {
  section: string;
}

const MenuSectionHeader = ({ section }: MenuSectionHeaderProps) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="text-2xl font-bold text-white">
        {section}
      </h3>
      {section === 'Curries' && (
        <p className="text-gray-200 mt-2">All Curries are Gluten Free & Dairy Free.</p>
      )}
    </div>
  );
};

export default MenuSectionHeader;