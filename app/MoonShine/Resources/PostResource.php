<?php

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;

use Leeto\MoonShine\Resources\Resource;
use Leeto\MoonShine\Fields\ID;
use Leeto\MoonShine\Fields\Text;
use Leeto\MoonShine\Fields\Email;
use Leeto\MoonShine\Actions\ExportAction;
class PostResource extends Resource
{
	public static string $model = 'App\Models\requesting';

	public static string $title = 'Заявки';

	public function fields(): array
	{
		return [
            ID::make()->sortable()->showOnExport(),
            Text::make('ФИО','FIO')->required()->showOnExport(),
            Text::make('Телефон','phone')->required()->showOnExport(),
            Email::make('E-mail','email')->required()->showOnExport(),
            Text::make('Сообщение','txt_za')->required()->showOnExport(),
        ];
	}

	public function rules(Model $item): array
	{
	    return [
            'FIO'=>['required'],
            'phone'=>['required'],
            'email'=>['required'],
            'txt_za'=>['required']
        ];
    }

    public function search(): array
    {
        return ['id', 'email','FIO'];
    }

    public function filters(): array
    {
        return [];
    }

    public function actions(): array
    {
        return [
            ExportAction::make('Экспорт'),
        ];
    }
}
