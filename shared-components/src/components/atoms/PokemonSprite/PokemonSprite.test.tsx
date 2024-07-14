import { render, screen } from '@testing-library/react';
import PokemonSprite from '.';

describe('PokemonSprite', () => {
    it('renders the image when src is provided', () => {
        const src = 'https://example.com/image.png';
        const alt = 'Example Pokemon';

        const { getByRole } = render(<PokemonSprite src={src} alt={alt} />);
        const img = getByRole('img', { name: alt }) as HTMLImageElement;

        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src');
        expect(img.src).toMatch(/\/_next\/image\?url=https%3A%2F%2Fexample.com%2Fimage.png/);
    });

    it('renders the skeleton when src is null', () => {
        const alt = 'Example Pokemon';

        render(<PokemonSprite src={null} alt={alt} />);
        const skeleton = screen.getByTestId('skeleton');
        expect(skeleton).toBeInTheDocument();
        expect(skeleton).toHaveClass('skeleton');
    });
});
