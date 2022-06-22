<?php

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;

use Leeto\MoonShine\Resources\Resource;
use Leeto\MoonShine\Fields\ID;
use Leeto\MoonShine\Fields\Text;

class ReviResource extends Resource
{
	public static string $model = 'App\Models\reviews';

	public static string $title = 'Отзывы';

	public function fields(): array
	{
		return [
            ID::make()->sortable(),
            Text::make('Имя','name')->required(),
            Text::make('Текст отзыва','text_r')->required(),
        ];
	}

	public function rules(Model $item): array
	{
	    return [];
    }

    public function search(): array
    {
        return ['id'];
    }

    public function filters(): array
    {
        return [];
    }

    public function actions(): array
    {
        return [];
    }
}
